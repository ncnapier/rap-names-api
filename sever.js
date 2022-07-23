const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000
const rappers = {
    '21 savage':{
    'birthName': 'Sheyaa Bin Abraham-Jeseph',
    'birthLocation': 'London, England',
    'age': 29
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}. Better go catch it!`)
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req, res)=>{
    const rapperName = req.params.name.toLowerCase()
    //console.log(rappers[rapperName].birthName)
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
     
})