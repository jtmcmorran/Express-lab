const express = require('express');
const app = express();
const fs = require('fs');
app.engine('jamie', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if(err){
      return callback(err);
    }
    const rendered = content.toString()
    .replace('#title#', `<title>${options.title}</title>`)
    .replace('#content#', options.content)
    return callback(null,rendered)
  })
})

app.set('views','./views')
app.set('view engine', 'jamie')
app.get('/one', (req,res) => {
  res.render('template-one', {title:'one', content:'first'})
})

app.get('/two', (req,res) => {
  res.render('template-one', {title:'two', content:'second one'})
})
app.get('/three', (req,res) => {
  res.render('template-one', {title:'three', content:'threeeeee'})
})
app.get('/four', (req,res) => {
  res.render('template-one', {title:'four', content:'four'})
})
app.get('/five', (req,res) => {
  res.render('template-one', {title:'five', content:'five'})
})
app.get('/six', (req,res) => {
  res.render('template-one', {title:'six', content:'six'})
})
app.get('/seven', (req,res) => {
  res.render('template-one', {title:'seven', content:'seven????'})
})
app.get('/eight', (req,res) => {
  res.render('template-two', {title:'eight', content:'eight'})
})
app.get('/nine', (req,res) => {
  res.render('template-two', {title:'nine', content:'nine'})
})
app.get('/ten', (req,res) => {
  res.render('template-two', {title:'ten', content:'it\'s a mystery'})
})

app.listen(3000, () => console.log('listening port 3000'))
