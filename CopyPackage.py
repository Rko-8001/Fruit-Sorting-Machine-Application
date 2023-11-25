#!/bin/sh

BASE_DIR=$(pwd)
PACKAGE_DIR="$BASE_DIR/client/src-tauri/target/release/bundle/deb/client_0.1.0_amd64.deb"
DESTINATION_DIR="$HOME/Desktop/fruit-sorter.deb"

# Copy the .deb package to the desktop
cp "$PACKAGE_DIR" "$DESTINATION_DIR"
echo "Package copied to desktop."
