  # syntax=docker/dockerfile:1
  #FROM mcr.microsoft.com/dotnet/sdk:5.0
  #WORKDIR /App
  #COPY . ./
  #RUN dotnet restore
  #RUN npm install /
  #RUN dotnet publish -c Release -o Account/bin/Release/net5.0/
  FROM mcr.microsoft.com/dotnet/aspnet:5.0
  COPY Account/bin/Release/net5.0/ App/
  WORKDIR /App
ENTRYPOINT [ "dotnet", "Account.dll" ]
# Use the following instead for Heroku
#CMD ASPNETCORE_URLS=http://*:$PORT dotnet Account.dll