import React,{useState} from 'react'
import {Layout,Card,Button, Typography, Progress, ConfigProvider, Switch} from 'antd'

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const Question = () => {

	const [currentQuestion,setCurrentQuestion] = useState(0)
	const [score,setScore] = useState(0)
	const [showScore,setShowScore] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(false); // State สำหรับโหมดกลางวัน/กลางคืน
    const questions = [
		{
			questionText: 'Ant Design คืออะไร?',
			answerOptions: [
				{ answerText: 'เครื่องมือสำหรับการสร้างเว็บไซต์', isCorrect: false },
				{ answerText: 'ภาษาโปรแกรมมิ่ง', isCorrect: false },
				{ answerText: 'ไลบรารี UI สำหรับ React', isCorrect: true },
				{ answerText: 'ระบบฐานข้อมูล', isCorrect: false },
			],
		},
		{
			questionText: 'Ant Design ถูกพัฒนาโดยบริษัทใด?',
			answerOptions: [
				{ answerText: 'Google', isCorrect: false },
				{ answerText: 'Alibaba', isCorrect: true },
				{ answerText: 'Facebook', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'Ant Design รองรับการออกแบบแบบใด?',
			answerOptions: [
				{ answerText: 'Responsive Design', isCorrect: true },
				{ answerText: 'Print Design', isCorrect: false },
				{ answerText: 'Minimal Design', isCorrect: false },
				{ answerText: '3D Design', isCorrect: false },
			],
		},
		{
			questionText: 'คอมโพเนนต์ใดใน Ant Design ใช้สำหรับแสดงปุ่ม?',
			answerOptions: [
				{ answerText: 'Input', isCorrect: false },
				{ answerText: 'Card', isCorrect: false },
				{ answerText: 'Modal', isCorrect: false },
				{ answerText: 'Button', isCorrect: true },
			],
		},
	];

	const handleAnswer  = (isCorrect)=>{
		console.log(isCorrect)
		if(isCorrect){
			setScore(score+1)
		}
		const nextQuestion = currentQuestion + 1
		if(nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion)
		}else{
			setShowScore(true)
		}
	}
	const handleRe = ()=>{
		setShowScore(false)
		setScore(0)
		setCurrentQuestion(0)
	}
	// ฟังก์ชันเปลี่ยนโหมด
	const toggleTheme = (checked) => {
		setIsDarkMode(checked);
	  };
	return (
		<ConfigProvider
      theme={{
        token: {
          colorPrimary: isDarkMode ? '#1DA57A' : '#ff7875', // สีหลักตามโหมด
        },
      }}
    >
		<Layout style={{ minHeight: '100vh', backgroundColor: isDarkMode ? '#001529' : '#fff2f0'  }}>
		<Header style={{ backgroundColor: isDarkMode ? '#1c1c1c' : '#ff7875', color: 'white', position: 'relative' }}>
          <h1 style={{ textAlign: 'center', margin: 0 }}>Quiz Application</h1>
		  <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            style={{
              position: 'absolute',
              top: '15px', // ระยะห่างจากขอบบน
              left: '20px', // ระยะห่างจากขอบซ้าย
              zIndex: 1 // ให้อยู่เหนือเนื้อหาอื่น ๆ
            }}
          />
        </Header>
			<Content
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: 'calc(100vh - 64px)', // ปรับขนาดให้พอดีกับ Header ความสูง 64px
				}}
			>
				<Card className="quiz-card" style={{ textAlign: 'center', maxWidth: '500px', width: '100%', padding: '20px' ,}}>
					{showScore ? (
						<div>
							<Title level={3}>Your Score: {score}/{questions.length}</Title>
							<Button type="primary" onClick={handleRe}>Re-Question</Button>
						</div>
					) : (
						<div>
							<Title level={4}>Question {currentQuestion + 1}/{questions.length}</Title>
							<Text className="question-text">{questions[currentQuestion].questionText}</Text>
							<Progress
								percent={((currentQuestion + 1) / questions.length) * 100}
								status="active"
								showInfo={false}
								strokeColor="#52c41a"
								style={{ margin: '20px 0' }}
							/>
							<div className="answer">
								{questions[currentQuestion].answerOptions.map((item, index) => (
									<Button
										className="answer-button"
										type="default"
										block
										key={index}
										onClick={() => handleAnswer(item.isCorrect)}
										style={{
											textAlign: 'center',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											marginBottom: '15px',
											padding: '10px',
											fontSize: '16px',
											borderRadius: '8px'
										}}
									>
										{item.answerText}
									</Button>
								))}
							</div>
						</div>
					)}
				</Card>
			</Content>
			<Footer style={{ textAlign: 'center' }}>©2024 Quiz Application</Footer>
		</Layout>
	</ConfigProvider>
	);
};

export default Question;