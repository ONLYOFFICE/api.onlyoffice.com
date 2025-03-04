#!/usr/bin/env bash

cd ${GITHUB_WORKSPACE}

# github.event_name CAN BE ACCESSED via bash variable: ${EVENT}
# github.ref_name CAN BE ACCESSED via bash variable: ${REF}
# github user token CAN BE ACCESSED via bash variable: ${TOKEN_PUBLICK_REPO}
# private repo token CAN BE ACCESSED via bash variabel: ${TOKEN_PRIVATE_REPO}
# private repo username CAN BE ACCESSED via bash variable: ${USER_PRIVATE_REPO}
# repo url CAN BE ACCESSED via bash variable: ${URL_PRIVATE_REPO}


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
        branch=$(curl -s -L \
              -H "Accept: application/vnd.github+json" \
              -H "Authorization: Bearer ${TOKEN_PUBLICK_REPO}" \
              -H "X-GitHub-Api-Version: 2022-11-28" \
              https://api.github.com/repos/ONLYOFFICE/${repo}/branches | \
              jq -r --arg branch "$branch" '.[] | select(.name | startswith($branch)) | .name')
         if [[ -z "${branch}" ]]; then
             echo "${COLOR_YELLOW}Branch ${branch} is not exist in repo ${repo}. Make it...${COLOR_RESET}"
            [[ ! -d ${repo} ]] && git clone https://${USER_PRIVATE_REPO}:${TOKEN_PRIVATE_REPO}@${URL_PRIVATE_REPO}/ONLYOFFICE/${repo}.git
            cd ${repo}
            git checkout master
            git checkout -b ${branch} && git push origin ${branch} && cd ${GITHUB_WORKSPACE}
            echo "${COLOR_GREEN}Branch ${branch} was created in repo ${repo}...${COLOR_RESET}"
         fi
     done
     rm -rf ${repo}
  done
  # Move back to working dir
  cd ${GITHUB_WORKSPACE}
}

function push_changes() {
  for branch in ${branches[@]}; do
    cd ${GITHUB_WORKSPACE}
    mkdir ${branch} && cd ${branch}
    for repo in ${repos[@]}; do
       git clone --single-branch --branch ${branch} https://${USER_PRIVATE_REPO}:${TOKEN_PRIVATE_REPO}@${URL_PRIVATE_REPO}/ONLYOFFICE/${repo}.git
    done
    working_dir=$(pwd)
    
    cd ./api.onlyoffice.com && git branch feature/office-js-bot-${branch} && git checkout feature/replace-office-js-bot-${branch} && cd ${working_dir}
    
    # Replace main api
    cp -r ./office-js-api/Word/*  ./api.onlyoffice.com/site/docs/office-api/usage-api/text-document-api/
    cp -r ./office-js-api/Slide/* ./api.onlyoffice.com/site/docs/office-api/usage-api/presentation-api/
    cp -r ./office-js-api/Cell/*  ./api.onlyoffice.com/site/docs/office-api/usage-api/spreadsheet-api/
    cp -r ./office-js-api/Forms/* ./api.onlyoffice.com/site/docs/office-api/usage-api/form-api/

    # Replace plugins api
    cp -r ./office-js-api/Plugins/Cell/*  ./api.onlyoffice.com/site/docs/plugin-and-macros/interacting-with-editors/methods/spreadsheet-api/
    cp -r ./office-js-api/Plugins/Forms/* ./api.onlyoffice.com/site/docs/plugin-and-macros/interacting-with-editors/methods/form-api/
    cp -r ./office-js-api/Plugins/Slide/* ./api.onlyoffice.com/site/docs/plugin-and-macros/interacting-with-editors/methods/presentation-api/
    cp -r ./office-js-api/Plugins/Word/*  ./api.onlyoffice.com/site/docs/plugin-and-macros/interacting-with-editors/methods/text-document-api/
    
    CHANGES=$(cd ./api.onlyoffice.com && git diff-index HEAD --)
    if [[ ! -z "${CHANGES}" ]]; then
      # COMMIT CHANGES AND MAKE PULL REQUEST
      cd ./api.onlyoffice.com
      git add .
      git commit -m "Add changes from office-js-api"
      git push origin feature/office-js-bot-${branch}
      curl -X POST "https://${URL_PRIVATE_REPO}/api/v1/repos/ONLYOFFICE/api.onlyoffice.com/pulls"  \
           -H "Content-Type: application/json"  \
           -H "Authorization: token ${TOKEN_PRIVATE_REPO}"  \
           -d "{ \"head\": \"feature/replace-office-js-bot-${branch}\",
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
