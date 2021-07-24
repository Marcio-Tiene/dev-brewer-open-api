#!/bin/bash
NETWORK_NAME=$(grep NETWORK_NAME .env | cut -d '=' -f2)
cd "$(dirname "$0")"
docker network create $NETWORK_NAME