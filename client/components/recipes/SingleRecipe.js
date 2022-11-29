import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleRecipe } from "./recipeSlice";
import {
  fetchSingleTracker,
  addToSingleTracker,
  fetchTrackers,
} from "../tracker/trackerSlice";
import {
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Box,
  CardContent,
  CircularProgress,
  Dialog,
  DialogTitle,
} from "@mui/material";
import { Stack } from "@mui/system";

function SingleRecipe() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { id } = useParams();

  const recipe = useSelector((state) => state.recipes.singleRecipes);
  const {
    imageUrl,
    name,
    cookTime,
    calories,
    diet,
    protein,
    carbs,
    fat,
    courseType,
    cuisine,
  } = recipe;

  const tracker = useSelector((state) => state.tracker.singleTracker);
  const trackers = useSelector((state) => state.tracker.allTracker);

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, 0);
  };

  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }

  const todayTracker = trackers.filter(
    (tracker) => tracker.date === formatDate(new Date())
  );

  const todayTrackerId = todayTracker[0];

  const addToTrackerButton = async (id) => {
    const newFood = {
      id: recipe.id,
      foodName: recipe.name,
      calories: recipe.calories,
      protein: recipe.protein,
      carbs: recipe.carbs,
      fat: recipe.fat,
      courseType: recipe.courseType,
    };
    await dispatch(addToSingleTracker({ id, newFood }));
  };

  useEffect(() => {
    dispatch(fetchTrackers());
    dispatch(fetchSingleRecipe(id));
    if (todayTrackerId) {
      dispatch(fetchSingleTracker(todayTrackerId.id));
    }
  }, []);

  return (
    <Stack>
      {todayTrackerId ? (
        <Stack sx={{alignItems: 'center'}}>

      <Stack>
         <Stack >
          <Stack>

            <Typography
              variant="h5"
              textAlign="center"
              className="linkColor"
              sx={{pb:2,  maxWidth: '400px'}}
             
            >
              {name}
            </Typography>

            
            <Dialog open={open} onClose={handleClose} sx={{backgroundColor: '#242424'}}>
              <DialogTitle sx={{backgroundColor:'rgba(156 163 175 50)', alignItems:'center', p:1, m:1, textAlign: 'center'}}>
                <span className="linkColor">{name}</span> was successfully added to today's tracker!
              </DialogTitle>
              <Stack direction='row' spacing={2} sx={{p:2}}>
                <Button sx={{width: "100%",
							color: "#F7AB0A",
							border: "1px solid rgb(156 163 175)"}}
               onClick={handleClose}>close</Button>
                <Button
                sx={{width: "100%",
                color: "#F7AB0A",
                border: "1px solid rgb(156 163 175)"}}
                  onClick={() => {
                    navigate(`/trackers/`);
                  }}
                >
                  Go to your Trackers
                </Button>
              </Stack>
            </Dialog>
            
          </Stack>
          <Stack sx={{alignItems:'center'}}
           
          >
            <Box
              component="img"
              src={imageUrl}
              sx={{
                borderRadius: "15%",
                width: "100%",
                height: "100%",
                maxWidth: '400px',
                maxHeight: '400px',
                textAlign: "center",
                border: '3px solid #f7ab0a',
                boxShadow: '6'
              }}
            />
          </Stack>
          <Grid item>
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={1}>
              <Box gridColumn="span 2" justifyContent="space-around">
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                    bgcolor: "#242424",
                    border: "solid #313131",
                    boxShadow: "6",
                  }}
                >
                  <Typography variant="h6" color="rgb(156 163 175)">
                    Cooking Time:  <span className="yellowcolor">{cookTime}Mins</span>
                  </Typography>
                  </Card>
                  <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                    bgcolor: "#242424",
                    border: "solid #313131",
                    boxShadow: "6",
                  }}
                >
                  <Typography variant="h6" color="rgb(156 163 175)">
                    Calories:   <span className="yellowcolor">{calories}Cal</span>
                  </Typography>
                  </Card>

                  <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                    bgcolor: "#242424",
                    border: "solid #313131",
                    boxShadow: "6",
                  }}
                >
                  <Typography variant="h6" color="rgb(156 163 175)">
                    Protein:   <span className="yellowcolor">{protein}g</span>
                  </Typography>
                  </Card>

                  <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                    bgcolor: "#242424",
                    border: "solid #313131",
                    boxShadow: "6",
                  }}
                >
                  <Typography variant="h6" color="rgb(156 163 175)">
                    Carbohydrates:  <span className="yellowcolor">{carbs}g</span>
                  </Typography>
                  </Card>

                  <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                    bgcolor: "#242424",
                    border: "solid #313131",
                    boxShadow: "6",
                  }}
                >
                  <Typography variant="h6" color="rgb(156 163 175)">
                    Fats:  <span className="yellowcolor">{fat}g</span>
                  </Typography>
                  </Card>

                  <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                    bgcolor: "#242424",
                    border: "solid #313131",
                    boxShadow: "6",
                  }}
                >
                 <Typography variant="h6" color="rgb(156 163 175)">
                    Course Type: <span className="yellowcolor">{courseType ? courseType[0].toUpperCase() + courseType.slice(1): 'not available'}</span>
                  </Typography>
                  </Card>

                  <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                    bgcolor: "#242424",
                    border: "solid #313131",
                    boxShadow: "6",
                  }}
                >
                    <Typography variant="h6" color="rgb(156 163 175)">
                    Cuisine:  <span className="yellowcolor">{cuisine ? cuisine[0].toUpperCase() + cuisine.slice(1): 'not available'}</span>
                  </Typography>
                  </Card>


               
              </Box>
              <Box
                gridColumn="span 2"
                textAlign="center"
                flexDirection="column"
              >
                <Stack sx={{ width: "100%", height:'40px', pb:2, pt:2, alignItems: 'center'}}>
                  <Button
                    onClick={() => {
                      addToTrackerButton(tracker.id);
                      handleClickOpen();
                    }}
                    variant="standard"
                    sx={{
                      width: "100%",
                      color: "#F7AB0A",
                      border: "1px solid rgb(156 163 175)",
                      boxShadow: "6",
                    }} 
                  >
                    Add to Today's Tracker!
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Stack>
     </Stack>

     </Stack>
      ) : (
        <CircularProgress />
      )}
    </Stack>
  );
}

export default SingleRecipe;