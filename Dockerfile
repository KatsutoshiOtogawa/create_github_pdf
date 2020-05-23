FROM node:14.3.0 as puppet

RUN apt update && apt full-upgrade

RUN apt install git

RUN git clone https://github.com/KatsutoshiOtogawa/create_github_pdf.git app

WORKDIR /app
