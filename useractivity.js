const posts = [{title: 'POST1'},{title: 'POST2'}];
function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}

function create3rdPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve()
        }, 2000)
    }) 
}
function create4thPost() {
    console.log(`Before creating post4, user lasttimeactivity = ${new Date()}`);
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST4'});
            resolve();
        }, 4000)
    }) 
}

function updateLastUserActivityTime (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let lastactivitytime = new Date()
            resolve(lastactivitytime )
        },1000)
    })
}

function deletePost() {
    return new Promise((resolve, reject) => {   
        setTimeout(()=>{
            posts.pop()
            resolve()
        },1000)
    })
}

let update = async ()=>{
    let post3 = await create3rdPost();
    let post4 = await create4thPost();
    console.log("After creating post 4 >>>>>>>");
    console.log(new Date());
    let useract = await updateLastUserActivityTime();
    let deleting = await deletePost();
}

update().then(()=>{
    console.log(posts);
})

// Promise.all([create3rdPost() ,create4thPost(),updateLastUserActivityTime()]).then((value)=>{
//     console.log("After creating post 4 >>>>>>>");
//     console.log(posts);
//     console.log(`User last time activity ${value}`);
    
// })
// .then(()=>{
//     deletePost();
//     console.log(posts);
// })



