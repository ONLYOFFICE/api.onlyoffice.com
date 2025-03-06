#!/usr/bin/env bash

MAIN_DIR="${GITHUB_WORKSPACE}/replace-js"

# github.event_name CAN BE ACCESSED via bash variable: ${EVENT}
# github.ref_name CAN BE ACCESSED via bash variable: ${REF}
# github user token CAN BE ACCESSED via bash variable: ${TOKEN_PUBLICK_REPO}
# private repo token CAN BE ACCESSED via bash variabel: ${TOKEN_PRIVATE_REPO}
# private repo username CAN BE ACCESSED via bash variable: ${USER_PRIVATE_NAME}
# repo url CAN BE ACCESSED via bash variable: ${URL_PRIVATE_REPO}
# private user mail CAN BE ACCESSED via bash variable: ${USER_PRIVATE_MAIL}


repos=(
   "api.onlyoffice.com"
   "office-js-api"
   )
   
if [[ "${EVENT}" == "schedule" ]]; then
    BUILD_TOOLS_BRANCHES=($(curl -s -L \
              -H "Accept: application/vnd.github+json" \
              -H "Authorization: Bearer ${TOKEN_PUBLICK_REPO}" \
              -H "X-GitHub-Api-Version: 2022-11-28" \
              https://api.github.com/repos/ONLYOFFICE/build_tools/branches | \
              jq -r '.[] | select(.name != "hotfix/v1.0.0" and (.name | startswith("hotfix/") or startswith("release/"))) | .name'))
fi

BRANCHES=("${BUILD_TOOLS_BRANCHES[@]:-${REF}}")

# Exit if branches wasn't fetchet
[[ -z "${BRANCHES}" ]] && { echo "Can't find any hotfix/release branches"; exit 1; }

function get_colors() {
    COLOR_BLUE=$'\e[34m'
    COLOR_GREEN=$'\e[32m'
    COLOR_RED=$'\e[31m'
    COLOR_RESET=$'\e[0m'
    COLOR_YELLOW=$'\e[33m'
    export COLOR_BLUE
    export COLOR_GREEN
    export COLOR_RED
    export COLOR_RESET
    export COLOR_YELLOW
}

function make_branches() {
  # Check that branches exist in repos and make it if not exist
  for repo in ${repos[@]}; do
    echo "Check branches in repo: ${COLOR_GREEN}${repo}${COLOR_RESET}"
    for branch in ${BRANCHES[@]}; do
        echo "Check branch: ${COLOR_GREEN}${branch}${COLOR_RESET}"
        exist_branch=$(curl -s -L \
              -H "Accept: application/vnd.github+json" \
              -H "Authorization: Bearer ${TOKEN_PUBLICK_REPO}" \
              -H "X-GitHub-Api-Version: 2022-11-28" \
              https://api.github.com/repos/ONLYOFFICE/${repo}/branches | \
              jq -r --arg branch "$branch" '.[] | select(.name | startswith($branch)) | .name')
         if [[ -z "${exist_branch}" ]]; then
             echo "${COLOR_YELLOW}Branch ${branch} is not exist in repo ${repo}. Make it...${COLOR_RESET}"
            [[ ! -d ${repo} ]] && git clone https://${USER_PRIVATE_NAME}:${TOKEN_PRIVATE_REPO}@${URL_PRIVATE_REPO}/ONLYOFFICE/${repo}.git
            cd ${repo}
            git branch "${branch}" && git push origin ${branch} && cd ${MAIN_DIR}
            echo "${COLOR_GREEN}Branch ${branch} was created in repo ${repo}...${COLOR_RESET}"
         else 
            echo "${COLOR_GREEN}Branch ${branch} is exist in repo ${repo}... Skip...${COLOR_RESET}"
         fi
     done
     rm -rf ${repo}
  done
  # Move back to working dir
  cd ${MAIN_DIR}
}

function push_changes() {
  echo "${COLOR_BLUE}Set git user${COLOR_RESET}"
  git config --global user.email "${USER_PRIVATE_MAIL}"
  git config --global user.name "${USER_PRIVATE_NAME}"
  
  echo "${COLOR_BLUE}Check changes in office-js-api and make PR with this changes...${COLOR_RESET}"
  for branch in ${BRANCHES[@]}; do
    echo "${COLOR_BLUE}Get changes from branch: ${branch}${COLOR_RESET}"
    cd ${MAIN_DIR}
    mkdir ${branch##*/} && cd ${branch##*/}
    working_dir=$(pwd)
    git clone --single-branch --branch ${branch} https://github.com/ONLYOFFICE/build_tools.git
    git clone --single-branch --branch ${branch} https://github.com/ONLYOFFICE/sdkjs.git
    git clone --single-branch --branch ${branch} https://github.com/ONLYOFFICE/sdkjs-forms.git
    for repo in ${repos[@]}; do
       git clone https://${USER_PRIVATE_NAME}:${TOKEN_PRIVATE_REPO}@${URL_PRIVATE_REPO}/ONLYOFFICE/${repo}.git
       cd ./${repo}
       git checkout ${branch} 
       cd ${working_dir}
    done

    cd ./api.onlyoffice.com
    if [[ $( git ls-remote origin feature/replace-office-js-bot-${branch//\//-}) ]]; then
        echo "${COLOR_BLUE}Branch feature/replace-office-js-bot-${branch//\//-} exist in remote repo${COLOR_RESET}"
        head_branch_exist=true
    else
        echo "${COLOR_YELLOW}Branch feature/replace-office-js-bot-${branch//\//-} not exist in api.onlyoffice.com repo, create...${COLOR_RESET}"
        git branch feature/replace-office-js-bot-${branch//\//-}
        head_branch_exist=false
    fi
    git checkout feature/replace-office-js-bot-${branch//\//-} 
    cd ${working_dir}
    
    # Build using build_tools
    cd ./build_tools/scripts/sdkjs_common/jsdoc
    npm install
    python generate_docs_md.py
    python generate_docs_plugins_md.py
    cd ${working_dir}
    
    # Replace main api files
    echo "${COLOR_BLUE}Replace main api files...${COLOR_RESET}"
    cp -r ./office-js-api/Word/*  ./api.onlyoffice.com/site/docs/office-api/usage-api/text-document-api/
    cp -r ./office-js-api/Slide/* ./api.onlyoffice.com/site/docs/office-api/usage-api/presentation-api/
    cp -r ./office-js-api/Cell/*  ./api.onlyoffice.com/site/docs/office-api/usage-api/spreadsheet-api/
    cp -r ./office-js-api/Forms/* ./api.onlyoffice.com/site/docs/office-api/usage-api/form-api/

    # Replace plugins api files
    echo "${COLOR_BLUE}Replace plugins api files...${COLOR_RESET}"
    cp -r ./office-js-api/Plugins/Cell/*  ./api.onlyoffice.com/site/docs/plugin-and-macros/interacting-with-editors/methods/spreadsheet-api/
    cp -r ./office-js-api/Plugins/Forms/* ./api.onlyoffice.com/site/docs/plugin-and-macros/interacting-with-editors/methods/form-api/
    cp -r ./office-js-api/Plugins/Slide/* ./api.onlyoffice.com/site/docs/plugin-and-macros/interacting-with-editors/methods/presentation-api/
    cp -r ./office-js-api/Plugins/Word/*  ./api.onlyoffice.com/site/docs/plugin-and-macros/interacting-with-editors/methods/text-document-api/
    
    CHANGES=$(cd ./api.onlyoffice.com && git diff)
    if [[ ! -z "${CHANGES}" ]]; then
      echo "${COLOR_BLUE}Changes exist, push them to api.onlyoffice.com${COLOR_RESET}"
      cd ./api.onlyoffice.com
      
      git add .

      git commit -m "Add changes from office-js-api"

      if [[ "${head_branch_exist}" == 'true' ]]; then
        echo "${COLOR_BLUE}Push when branch exist${COLOR_RESET}"
        git push 
      elif [[ "${head_branch_exist}" == 'false' ]]; then
        echo "${COLOR_RED}Push when branch non-exist${COLOR_RESET}"
        git push --set-upstream origin feature/replace-office-js-bot-${branch//\//-}
      fi

      curl -X POST "https://${URL_PRIVATE_REPO}/api/v1/repos/ONLYOFFICE/api.onlyoffice.com/pulls"  \
           -H "Content-Type: application/json"  \
           -H "Authorization: token ${TOKEN_PRIVATE_REPO}"  \
           -d "{ \"head\": \"feature/replace-office-js-bot-${branch//\//-}\",
                 \"base\": \"${branch}\",
                 \"title\": \"Merge changes from office-js-api ${branch}\",
                 \"body\": \"Please check it @trofim24\"
               }"
    else
      echo "${COLOR_GREEN} Do not detect any changes...${COLOR_RESET}"
    fi
  done
}

function main() {
  get_colors
  make_branches
  push_changes
}

main
