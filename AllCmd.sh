#!/bin/sh
BASE_DIR=$(pwd)

#######       frontend Cmd      #######

Client_DIR="$BASE_DIR/client"
Server_DIR="$BASE_DIR/server"

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

# function to build frontend
build_frontend() {
    cd "$Client_DIR"
    npm run tauri build
    echo "Frontend built."
}

#function to run frontend
run_frontend() {
    cd "$Client_DIR"
    npm run tauri dev
    echo "Frontend running."
}


######          server Cmd       ######

# function to activate virtual environment for the server
activate_virtual_env() {
    cd "$BASE_DIR"
    source server-env/bin/activate
    echo "Virtual environment activated."
}

# function to create virtual environment for the server
create_virtual_env() {
    cd "$BASE_DIR"
    virtualenv -p python3 server-env
    echo "Virtual environment created."
}

# function to install server dependencies
install_server_dependencies() {
    cd "$Server_DIR"
    pip install -r ./requirements.txt
    echo "Server dependencies installed."
}

# function to run server
run_server() {
    activate_virtual_env
    cd "$Server_DIR"
    python3 ./server.py
    echo "Server running."
}