const random=n=>Math.floor(Math.random()*n);
// A growing tree mixes long corridors with randomly selected frontier cells.
// Candidate mazes must offer several substantial detours along the true route.
export function generateMaze(level){
  const n=[11,19,29][level],ds=[[-1,0],[0,1],[1,0],[0,-1]];
  let best=null,bestScore=-Infinity;
  for(let attempt=0;attempt<90;attempt++){
    const walls=Array.from({length:n*n},()=>[true,true,true,true]),seen=new Set([0]),active=[0];
    while(active.length){
      const position=Math.random()<.72?active.length-1:random(active.length),i=active[position],r=i/n|0,c=i%n;
      const choices=[];
      for(let d=0;d<4;d++){let y=r+ds[d][0],x=c+ds[d][1];if(y>=0&&y<n&&x>=0&&x<n&&!seen.has(y*n+x))choices.push(d);}
      if(!choices.length){active.splice(position,1);continue;}
      const d=choices[random(choices.length)],j=(r+ds[d][0])*n+c+ds[d][1];
      walls[i][d]=false;walls[j][(d+2)%4]=false;seen.add(j);active.push(j);
    }
    const neighbors=i=>ds.flatMap(([dy,dx],d)=>!walls[i][d]?[i+dy*n+dx]:[]);
    const parents=new Map([[0,-1]]),todo=[0];
    for(let k=0;k<todo.length;k++)for(const j of neighbors(todo[k]))if(!parents.has(j)){parents.set(j,todo[k]);todo.push(j);}
    let path=[],cur=n*n-1;while(cur!==-1){path.push(cur);cur=parents.get(cur);}path.reverse();
    const solution=new Set(path);let turns=0,detours=0,deepDetours=0,interior=0;
    for(let k=0;k<path.length;k++){
      const i=path[k],r=i/n|0,c=i%n;if(r>0&&r<n-1&&c>0&&c<n-1)interior++;
      if(k>1&&path[k]-path[k-1]!==path[k-1]-path[k-2])turns++;
      for(const j of neighbors(i))if(!solution.has(j)){
        detours++;let maxDepth=0,branch=[[j,i,1]];
        while(branch.length){const [cell,prev,depth]=branch.pop();maxDepth=Math.max(depth,maxDepth);for(const next of neighbors(cell))if(next!==prev)branch.push([next,cell,depth+1]);}
        if(maxDepth>=3)deepDetours++;
      }
    }
    const deadEnds=walls.filter(w=>w.filter(x=>!x).length===1).length;
    const score=deepDetours*12+detours*3+turns+path.length*.3+deadEnds*.4;
    const candidate={type:'maze',n,walls,path,metrics:{deadEnds,detours,deepDetours,turns,interior}};
    if(score>bestScore){best=candidate;bestScore=score;}
    if(path.length>=n*[3,4,5][level]&&deepDetours>=[5,10,18][level]&&deadEnds>=n*n*.15&&interior>=path.length*.55){best=candidate;break;}
  }
  best.walls[0][0]=false;best.walls[n*n-1][2]=false;
  return best;
}
