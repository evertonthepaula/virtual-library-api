#!/bin/bash

set -e

[ -z "$1" ] && IMAGE=virtual-library-image || IMAGE=$1

[ -z "$2" ] && WORKDIR=/virtual-library-api/ || WORKDIR=$2

[ -z "$3" ] && CMD=bash || CMD=$3

[ -z "$4" ] && DIR=$PWD || DIR=$4

docker run \
--name virtual-library-api-container \
-v $DIR:/virtual-library-api/ \
-v ~/.ssh/:/root/.ssh/ \
-w $WORKDIR \
--network host \
-it --rm \
$IMAGE $CMD

exit 0