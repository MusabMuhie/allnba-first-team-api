const express=require('express')
const app= express()
const cors=require('cors')
const PORT=process.env.PORT || 8000

app.use(cors())
const players={
    'luka':{
        'name': 'Luka Doncic',
        'position':'point guard',
        'age': 23
    },
    'devin':{
        'name': 'Devin Booker',
        'position':'shooting gaurd',
        'age' : 25
    },
    'jayson':{
        'name': 'Jayson Tatum',
        'position':'small forward',
        'age': 24
    },
   
    'giannis':{
        'name': 'Giannis Antetokounmpo',
        'position':'power forward',
        'age': 27
    },
    'nikola':{
        'name': 'Nikola Jokic',
        'position':'center',
        'age': 27
    },
    'unkown':{
        'name': 'Unknown',
        'position': 'Unknown',
        'age':0
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')

})


app.get('/api',(req,res)=>{
    res.json(players)
})

app.get('/api/:player',(req,res)=>{
    const playerName=req.params.player.toLowerCase()
    if(players[playerName]){
        res.json(players[playerName])
    }else{
        res.json(players['unkown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`This server is running on port ${PORT}`)
})
