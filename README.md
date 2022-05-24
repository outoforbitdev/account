# account

## How the branches work
#### Unique branch
This is where all development should occur. While developing a piece of functionality, build it in an isolated branch.
#### Development branch
When development of a piece of functionality is complete, merge it into the **Development** branch. New unique branches will pull from this branch, and this is the first place where different pieces of functionality are combined.
#### Compiled branch
Since the Development branch will be inherently unstable, once there is a successful compile in the **Development** branch and the app launch without errors, the **Development** branch can be merged into the **Compiled** branch. Once in this branch, new functionality should be tested rigourosly for stability and quality.
#### Stable branch
When testing is complete in the **Compiled** branch, code can be merged into the **Stable** branch. At that point, code will sit in this branch and tested over time to allow the code to stabilize.
#### Release branch
When the code in the **Stable** branch has stabilized and further rounds of testing are complete, it can be merged into the **Release** branch. This branch should often be identical to the **Main** branch. Code in here should be smoke tested, and this is where new features should be demoed and prepared before release.
#### Main branch
When we are ready to release a new piece of functionality, the **Release** branch will be merged into the **Main** branch, which publishes into the main url for the app.

## Roadmap to 1.0
### 0.1 Galactic Map
In 0.1, we will support a full galactic map. This map will also be made standalone at a different URL, without requiring login.
The galactic map will feature planets/systems which, when clicked, will open an info sidebar to explain more about the system/planet.
We will also link to Wookiepedia.
Objects: Systems, Hyperlanes, Celestial Bodies, Suns, Populations, Planet Terrains, Sectors
### 0.2 Governments
In 0.2, we will build out galactic governments of the post-Endor era.
Objects: Governments
### 0.3 Space Maneuvers
In 0.3, we will add support for space units, grouping them into Fleets associated with Governments, and support moving them between planets.
Objects: Starship Models, Starships, Fleets
### 0.4 Space Battles
In 0.4, we will support simple space battles between enemy fleets orbiting the same planet.
Objects: Space Battle
### 0.5 Galactic Warfare AI
In 0.5, we will support galactic campaigns. This will include the addition of unit production, as well as AI for unit production and space maneuvers.
Objects: 
### 0.6 Ground Battles
In 0.6, we will add support for ground units, grouping them into Armies associated with Governments.
Objects: Ground Vehicle Models, Ground Vehicles, Armies
### 0.7
### 0.8
### 0.9
### 1.0