#! /bin/bash
IM="node:9.4.0-stretch"
CN="es6"
HN="server"
P="4000"
LV="$(pwd)"
CV="/root/repo/"

docker run -it \
    --name $CN -h $HN \
    -p $P:$P -v $LV:$CV \
    $IM /bin/bash
