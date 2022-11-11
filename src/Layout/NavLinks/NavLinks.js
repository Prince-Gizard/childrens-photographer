import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme, Button, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from '@mui/icons-material/Telegram';

const NavLinks = ({ pages, handleClose }) => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <>
      {pages.map(({ title, path }, i) => (
        <Link href={path} passHref key={i}>
          <Button
            component="a"
            color="primary"
            disableRipple
            onClick={handleClose}
            sx={{
              fontWeight: router.pathname === path && "bold",
              "&:hover": {
                backgroundColor: "transparent",
                fontWeight: "bold",
              },
            }}
          >
            {title}
          </Button>
        </Link>
      ))}
      <IconButton
        color="secondary"
        aria-label="instagram"
        href="https://www.instagram.com/"
        target="_blank"
        onClick={handleClose}
        disableRipple
        sx={{
          "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: "transparent",
          },
        }}
      >
        <InstagramIcon fontSize="small" />
      </IconButton>
      <IconButton
        color="secondary"
        aria-label="telegram"
        href="https://www.telegram.com/"
        target="_blank"
        onClick={handleClose}
        disableRipple
        sx={{
          "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: "transparent",
          },
        }}
      >
        <TelegramIcon fontSize="small" />
      </IconButton>
    </>
  );
};

export default NavLinks;
