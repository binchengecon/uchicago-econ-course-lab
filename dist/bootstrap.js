(() => {
  const version=Date.now();
  const load=src=>new Promise((resolve,reject)=>{
    const script=document.createElement("script");
    script.src=`${src}?v=${version}`;
    script.onload=resolve;
    script.onerror=()=>reject(new Error(`Unable to load ${src}`));
    document.body.appendChild(script);
  });
  load("data.js").then(()=>load("app.js")).catch(error=>{
    const message=document.createElement("p");
    message.className="load-error";
    message.textContent="The planner files could not be loaded. Check that this folder is available offline, then refresh the page.";
    document.body.prepend(message);
    console.error(error);
  });
})();
