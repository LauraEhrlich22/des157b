async function getData(){
    const steps = await fetch('steps.json');
    const data = await steps.json();
}