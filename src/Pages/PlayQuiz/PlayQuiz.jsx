import { questions as originalQuestions } from "@/Data/quizeData";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const buttonStyle = {
  margin: "8px",
  borderRadius: "5px",
};
const correctOptionStyle = {
  backgroundColor: "green",
};
const wrongOptionStyle = {
  backgroundColor: "red",
};

const PlayQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(15);
  const numberOfQuestions = 10;

  useEffect(() => {
    shuffleAndSelectQuestions();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (timer === 0) {
      handleAnswer(null);
    }
  }, [timer]);

  const shuffleAndSelectQuestions = () => {
    const shuffledQuestions = [...originalQuestions].sort(
      () => Math.random() - 0.5
    );
    const selectedQuestions = shuffledQuestions.slice(0, numberOfQuestions);
    setQuestions(selectedQuestions);
    setCurrentQuestion(0);
    setSelectedOption("");
    setShowResult(false);
    setTimer(15);
  };

  const handleAnswer = (selected) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    setSelectedOption(selected);
    setShowResult(true);

    if (selected === correctAnswer || selected === null) {
      setTimeout(goToNextQuestion, 500);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption("");
      setShowResult(false);
      setTimer(15);
    } else {
      setShowResult(true);
    }
  };

  return (
    <Paper
      sx={{
        padding: "20px",
        width: 1,
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      {questions.length > 0 && (
        <>
          <Typography variant="h5" pb={"20px"}>
            {questions[currentQuestion].question}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                sx={{
                  width: 1,
                  padding: "10px",
                  textAlign: "center",
                  color: "black",
                  cursor: "pointer",
                  backgroundColor:
                    showResult &&
                    option === questions[currentQuestion].correctAnswer
                      ? correctOptionStyle
                      : selectedOption === option
                      ? wrongOptionStyle
                      : "#e0e0e0",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                  "&.MuiButton-root.Mui-disabled": {
                    color: "black",
                  },
                }}
                onClick={() => handleAnswer(option)}
                disabled={showResult || !!selectedOption}
              >
                {option}
              </Button>
            ))}
          </Box>
          {showResult && (
            <Box>
              <Typography variant="body7" pt={"10px"} textAlign={"center"}>
                Correct answer: {questions[currentQuestion].correctAnswer}
              </Typography>
              <Button
                variant="buttonOne"
                fullWidth
                onClick={goToNextQuestion}
                sx={{
                  mt: "30px",
                }}
              >
                Next Question
              </Button>
            </Box>
          )}
          {!showResult && timer > 0 && (
            <Typography textAlign={"center"} variant="body1" pt={"10px"}>
              Time Left: {timer}
            </Typography>
          )}
        </>
      )}
      {questions.length === 0 && (
        <Typography variant="body1" textAlign="center">
          Loading...
        </Typography>
      )}
    </Paper>
  );
};

export default PlayQuiz;
