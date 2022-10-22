const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello PCYP')
})
app.get('/getname',(req,res) => {
    res.send(" Phitchayaphorn yodya")
})


app.get('/getprofile',(req,res) => {
    let data = {
        name : 'Phitchayaphorn Yodya',
        age : '19',
        detail : 'ชื่อเล่น ฟ้า ( ColorSky ) ตอนนี้กำลังศึกษาอยู่คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมมัลติมีเดียและเอ็นเตอร์เทนเมนต์ ชั้นปีที่ 2 ชอบฟังเพลง K-pop \
        ชอบอ่านนิยาย ชอบดูหนัง Disney หรือ ประเภทแฟนตาซี ชอบเล่นบาสแล้วก็ชอบเต้น CoverDance.'
    }
    res.send(data)
})

app.get('/getabout',(req,res) => {
    let data = {
        email : 'Phitchayaphorn.yody@bumail.net',
        address : 'Samutprakan,Thailand',
    }
    res.send(data)
})

app.get('/getProject',(req,res) => {
    let data = {
        project_name: 'รายการ BeatBox Knockout',
        project_description: '"ร่วมกันคิดและสร้างสรรค์รายการโทรทัศน์ภายใต้โครงการ BU Creative sandbox x Workpoint 2022',
        
    }
    res.send(data)
})

app.get('/getContact',(req,res) => {
    let data = {
        email : 'Phitchayaphorn.yody@bumail.net',
        address : 'Samutprakan,Thailand',
        Tel : '0986459053',
        
    }
    res.send(data)
})


app.listen(3000, ()=> {
    console.log('Start server at port 3000.')
})
