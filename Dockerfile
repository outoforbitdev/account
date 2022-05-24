  # syntax=docker/dockerfile:1
  FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
  RUN curl --silent --location https://deb.nodesource.com/setup_16.x | bash -
  RUN apt-get install --yes nodejs
  RUN npm --version
  WORKDIR /App
  COPY . ./
  RUN dotnet restore
  RUN dotnet publish -c Release -o Account/bin/Release/net5.0/ --no-restore
  FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS production
  COPY Account/bin/Release/net5.0/ App/
  RUN ls
  RUN ls Account/
  RUN ls Account/ClientApp/
  RUN ls Account/bind/Release/net5.0/
  COPY Account/bin/Release/net5.0/ClientApp/build/ App/ClientApp/build/
  WORKDIR /App
ENTRYPOINT [ "dotnet", "Account.dll", "--launch-profile Account-Production" ]