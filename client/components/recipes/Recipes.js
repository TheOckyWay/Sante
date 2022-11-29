import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipes } from "./recipeSlice";
import { Container, Typography, Grid, Card, Box, styled } from "@mui/material";
import { Stack} from "@mui/material";
import Chip from '@mui/material/Chip';
import { minHeight } from "@mui/system";


function Recipes() {
  const dispatch = useDispatch();
  const BreakpointedImg = styled("img")(({ theme }) => ({
    // below the MUI default breakpoint "sm" which is 600px
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "50%",
    },
  }));

  const recipes = useSelector((state) => state.recipes.allRecipes);
  const updatedRecipes = recipes.filter((recipe) => recipe.name.length > 1);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <Stack direction='column' sx={{justifyContent:"center"}}>
      <Typography variant="h4" textAlign="center" color="rgb(156 163 175)" sx={{p:1,m:1}}>
        Recipes
      </Typography>
      <Stack direction='column' spacing={2} sx={{ height: "100%", alignItems: 'center' }}>
        {updatedRecipes.map((recipe) => {
          return (
            <Stack direction='column'
              key={recipe.id}
              sx={{
                mt: 2,
                border: "solid #313131",
                bgcolor: "#242424",
                boxShadow: "6",
                alignItems: 'center',
                minWidth: '50%',
                minHeight: '50%',
                borderRadius: 5,
              }}
              variant="outlined"
              borderradius="15%"
            >
              <Stack  sx={{textAlign: 'center', maxWidth: '80%', minWidth: '50%'  }}>
              <Link to={`/recipes/${recipe.id}`} >
                    <h2 className="linkColor">{recipe.name}</h2>
                  </Link>
              </Stack>

              <Stack direction='column' sx={{alignItems: 'center' , p:1,m:1 }} >
                <Stack direction='row'>
                  <BreakpointedImg
                    style={{ borderRadius: "15%", width: '50%', height:'100%',p:1,m:1}}
                    src={recipe.imageUrl}
                  
                  />

                <Stack direction='column' spacing={5} sx={{m:1}}>
                <Chip label={`Calories: ${recipe.calories}Cal`} color="warning"/>
                <Chip label={`Course Type: ${recipe.courseType}`} color="error"/>
                </Stack>
                </Stack>
                

              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}

export default Recipes;
