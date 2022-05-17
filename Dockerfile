  # syntax=docker/dockerfile:1
  FROM mcr.microsoft.com/dotnet/sdk:5.0 AS base
  WORKDIR /App
  RUN apt update
  RUN apt install -y nodejs npm
  RUN npm --version
  FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
  COPY . ./
  RUN dotnet restore
  RUN npm install /
  RUN dotnet publish -c Release -o Account/bin/Release/net5.0/ AS production
  FROM mcr.microsoft.com/dotnet/aspnet:5.0
  COPY Account/bin/Release/net5.0/ App/
  WORKDIR /App
#ENTRYPOINT [ "dotnet", "Account.dll" ]