#!/usr/bin/env bash

cp -R backstop_data/ src/report
git add src/
git commit -m "deploy static content" --no-verify