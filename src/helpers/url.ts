const url: string = import.meta.env.PROD
  ? "https://meeting-room.onrender.com/api/v1"
  : "http://localhost:8000/api/v1";

export default url;
