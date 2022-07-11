import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const imgUrl = "https://image.tmdb.org/t/p/w185/";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "630px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function BasicModal({ movie }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>more...</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {movie.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="pictures">
              {movie.known_for.map((film) => (
                <div>
                  <img src={imgUrl + film.poster_path} alt="" />
                  <p>{film.title}</p>
                </div>
              ))}
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
