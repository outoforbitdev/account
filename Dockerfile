  # syntax=docker/dockerfile:1
  FROM mcr.microsoft.com/dotnet/sdk:5.0 AS base
  WORKDIR /App
  RUN npm --version
  COPY . ./
  RUN npm install /
  FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
  RUN dotnet restore
  RUN dotnet publish -c Release -o Account/bin/Release/net5.0/ AS production
  FROM mcr.microsoft.com/dotnet/aspnet:5.0
  COPY Account/bin/Release/net5.0/ App/
  WORKDIR /App
#ENTRYPOINT [ "dotnet", "Account.dll" ]