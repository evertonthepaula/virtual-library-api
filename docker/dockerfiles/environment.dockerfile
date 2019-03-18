FROM ubuntu:16.04

# # replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# # nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 10.15

# ------------------------------------------------------
# --- usual apt-get steps & install linux packages
RUN apt-get update && apt-get -y upgrade && apt-get -y dist-upgrade \
    && DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y \
    openssh-client \
    netcat-openbsd \
    ca-certificates \
    openssl \
    gnupg \
    curl \
    ssh \
    git

# # ------------------------------------------------------
# # --- install NVM
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.7/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default \
    && nvm ls

# ------------------------------------------------------
# --- Cleanup and rev num
RUN apt-get autoremove && apt-get clean && rm -rf /var/lib/apt/lists/*
