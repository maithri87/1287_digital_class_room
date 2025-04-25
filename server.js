const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/noticeboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const noticeSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  date: { type: Date, default: Date.now },
});

const Notice = mongoose.model('Notice', noticeSchema);

// Routes
app.get('/api/notices', async (req, res) => {
  const notices = await Notice.find().sort({ date: -1 });
  res.json(notices);
});

app.post('/api/notices', async (req, res) => {
  const notice = new Notice(req.body);
  await notice.save();
  res.json(notice);
});

app.put('/api/notices/:id', async (req, res) => {
  const updated = await Notice.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

app.delete('/api/notices/:id', async (req, res) => {
  await Notice.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));