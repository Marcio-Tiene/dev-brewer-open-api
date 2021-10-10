#!/bin/bash
cd "$(dirname "$0")"
docker-compose up --force-recreate -d
docker-compose logs -f app