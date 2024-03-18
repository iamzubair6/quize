// import { questions } from "@/Data/quizeData";
// import { Box, Button, Paper, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// const buttonStyle = {
//   margin: "8px",
//   borderRadius: "5px",
// };
// const correctOptionStyle = {
//   backgroundColor: "green",
// };
// const wrongOptionStyle = {
//   backgroundColor: "red",
// };

// const PlayQuiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [showResult, setShowResult] = useState(false);
//   const [timer, setTimer] = useState(15); // in seconds

//   const [lock, setLock] = useState(false);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer((prevTimer) => prevTimer - 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   useEffect(() => {
//     if (timer === 0) {
//       handleAnswer(null); // If time runs out, treat it as if the user didn't select any option
//     }
//   }, [timer]);

//   const handleAnswer = (selected) => {
//     const correctAnswer = questions[currentQuestion].correctAnswer;
//     setSelectedOption(selected);
//     setShowResult(true);

//     if (selected === correctAnswer || selected === null) {
//       // Wait for 2 seconds before moving to the next question
//       setTimeout(goToNextQuestion, 500);
//     }
//   };

//   const goToNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion((prevQuestion) => prevQuestion + 1);
//       setSelectedOption("");
//       setShowResult(false);
//       setTimer(15); // Reset timer for next question
//     } else {
//       // Show result after finishing all questions
//       setShowResult(true);
//     }
//   };

//   return (
//     <Paper
//       sx={{
//         padding: "20px",
//         width: 1,
//         maxWidth: "400px",
//         margin: "auto",
//       }}
//     >
//       <Typography variant="h5" pb={"20px"}>
//         {questions[currentQuestion].question}
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           gap: "10px",
//           flexDirection: "column",
//         }}
//       >
//         {questions[currentQuestion].options.map((option, index) => (
//           <Button
//             key={index}
//             sx={{
//               width: 1,
//               padding: "10px",
//               textAlign: "center",
//               color: "black",
//               cursor: "pointer",
//               backgroundColor:
//                 showResult &&
//                 option === questions[currentQuestion].correctAnswer
//                   ? correctOptionStyle
//                   : selectedOption === option
//                   ? wrongOptionStyle
//                   : "#e0e0e0",
//               "&:hover": {
//                 backgroundColor: "#e0e0e0",
//               },
//               "&.MuiButton-root.Mui-disabled": {
//                 color: "black",
//               },
//             }}
//             onClick={() => handleAnswer(option)}
//             disabled={showResult || !!selectedOption} // Disable options after one is selected or if the result is shown
//           >
//             {option}
//           </Button>
//         ))}
//       </Box>
//       {showResult && (
//         <Box>
//           <Typography variant="body7" pt={"10px"} textAlign={"center"}>
//             Correct answer: {questions[currentQuestion].correctAnswer}
//           </Typography>
//           <Button
//             variant="buttonOne"
//             fullWidth
//             onClick={goToNextQuestion}
//             sx={{
//               mt: "30px",
//             }}
//           >
//             Next Question
//           </Button>
//         </Box>
//       )}
//       {!showResult && timer > 0 && (
//         <Typography textAlign={"center"} variant="body1" pt={"10px"}>
//           Time Left: {timer}
//         </Typography>
//       )}
//     </Paper>
//   );
// };

// export default PlayQuiz;
