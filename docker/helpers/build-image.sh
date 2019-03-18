#!/bin/bash

set -e

[ -z "$1" ] && echo "$(tput setaf 1) -- Você precisa definir o nome da sua imagem!" && exit 1

docker build -f ./docker/dockerfiles/environment.dockerfile -t $1 .