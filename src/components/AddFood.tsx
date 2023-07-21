import Button from "@mui/material/Button";

function AddFood() {
  return (
    <form >
      <input type="text" name="name" placeholder="enter Name" />
      <input type="text" name="calories" placeholder="enter Calories" />
      <input type="text" name="fat" placeholder="enter Fat (g)" />
      <input type="text" name="carbs" placeholder="enter Carbs (g)" />
      <input type="text" name="protein" placeholder="enter Protein (g)" />
      <Button variant="contained" color="success">
        Add
      </Button>
    </form>
  );
}
//formikle evez et
export default AddFood;
