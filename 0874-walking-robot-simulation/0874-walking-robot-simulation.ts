function robotSim(commands: number[], obstacles: number[][]): number {
    let pos: "north" | "south" | "east" | "west" = "north";
    let xy = [0, 0];
    let maxDistSquared = 0;
    const directions = ["north", "east", "south", "west"];
    let dirIndex = 0;
    
    const obstacleSet = new Set(obstacles.map(obs => `${obs[0]},${obs[1]}`));
    for (let command of commands) {
        if (command > 0) {
            for (let step = 0; step < command; step++) {
                let nextX = xy[0];
                let nextY = xy[1];
                switch (pos) {
                    case "north": nextY++; break;
                    case "south": nextY--; break;
                    case "east": nextX++; break;
                    case "west": nextX--; break;
                }
                if (obstacleSet.has(`${nextX},${nextY}`)) {
                    break;
                }
                xy = [nextX, nextY];
                maxDistSquared = Math.max(maxDistSquared, xy[0]*xy[0] + xy[1]*xy[1]);
            }
        } else if (command === -1) {
            dirIndex = (dirIndex + 1) % 4;
            pos = directions[dirIndex] as "north" | "south" | "east" | "west";
        } else if (command === -2) {
            dirIndex = (dirIndex - 1 + 4) % 4;
            pos = directions[dirIndex] as "north" | "south" | "east" | "west";
        }
    }

    return maxDistSquared;
}
