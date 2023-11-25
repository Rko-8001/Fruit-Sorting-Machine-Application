#!/bin/sh
BASE_DIR=$(pwd)
Client_DIR="$BASE_DIR/client"


# function to copt deb package to Desktop
copy_deb_package_to_desktop() {
    local PACKAGE_DIR="$BASE_DIR/client/src-tauri/target/release/bundle/deb/client_0.1.0_amd64.deb"
    local DESTINATION_DIR="$HOME/Desktop/fruit-sorter.deb"

    # Copy the .deb package to the desktop
    cp "$PACKAGE_DIR" "$DESTINATION_DIR"
    echo "Package copied to desktop."
}

# function to install frontend dependencies
install_frontend_dependencies() {
    cd "$Client_DIR"
    npm install
    echo "Frontend dependencies installed."
}

# function to create virtual environment for the server
creating_virtual_env() {
    cd "$BASE_DIR"
    virtualenv -p python3 server-env
    echo "Virtual environment created."

    # Activate the virtual environment
    source server-env/bin/activate
    echo "Virtual environment activated."
}

# function to install server dependencies
install_server_dependencies() {
    cd "$BASE_DIR/server"
    pip install -r ./requirements.txt
    echo "Server dependencies installed."
}








