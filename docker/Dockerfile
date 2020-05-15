FROM ubuntu:18.04

RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
    build-essential \
	chrpath \
	curl \
	git \
	gettext \
    libffi-dev \
    libcairo2 \
    libcairo2-dev \
	libfontconfig1 \
	libfontconfig1-dev \
	libfreetype6 \
	libfreetype6-dev \
    libmemcached-dev \
    libmysqlclient-dev \
    libssl-dev \
	libxft-dev \
	libxslt-dev \
    locales \
    python3-dev \
    libmagic1 \
    ca-certificates \
    wget && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN wget -O /tmp/get-pip.py https://bootstrap.pypa.io/get-pip.py && \
    python3 /tmp/get-pip.py && \
    rm /tmp/get-pip.py

RUN pip --no-cache-dir install virtualenv && virtualenv /venv/
ENV PATH="/venv/bin:${PATH}"

RUN mkdir /var/log/mctp
RUN mkdir /app

WORKDIR /app

COPY ./requirements.txt /app
COPY ./requirements_dev.txt /app

RUN pip --no-cache-dir install -r requirements_dev.txt
