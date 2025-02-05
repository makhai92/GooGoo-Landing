const express = require('express');
const bodyParser = require('body-parser');
const mariadb = require('mariadb');

const app = express();
const PORT = 3000;

// MariaDB 연결 풀 생성
const pool = mariadb.createPool({
    host: 'svc.sel5.cloudtype.app',
    user: 'root',
    port: '32510',
    password: '99',
    database: 'subline',
    connectionLimit: 5, // 동시 연결 수 제한
	connectTimeout: 20000
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client')); // 정적 파일 위치 지정

// 이메일 제출 처리 라우트
app.post('/join_process', async (req, res) => {
    const email = req.body.email; // 요청에서 이메일 추출
    const sql = 'INSERT INTO Emails (email) VALUES (?)';

    try {
        const conn = await pool.getConnection(); // 데이터베이스 연결
        await conn.query(sql, [email]);
        conn.end();
        res.send('Email successfully saved!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to save email');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

