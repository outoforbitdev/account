  # syntax=docker/dockerfile:1
  #FROM node:alpine AS base
  #WORKDIR /App
  #RUN npm --version
  #COPY . ./
  #WORKDIR /App/Account/ClientApp
  #RUN npm install /
  FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
  WORKDIR /App
  COPY . ./
  RUN dotnet restore
  RUN dotnet publish -c Release -o Account/bin/Release/net5.0/ AS production
  FROM mcr.microsoft.com/dotnet/aspnet:5.0
  COPY Account/bin/Release/net5.0/ App/
  WORKDIR /App
#ENTRYPOINT [ "dotnet", "Account.dll" ]