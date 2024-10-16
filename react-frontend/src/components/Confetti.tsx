import { useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { Howl } from "howler";

const ConfettiComponent = ({ isVisible }: { isVisible: boolean }) => {
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (isVisible) {
      const celebrationSound = new Howl({
        src: ["./assets/sounds/confetti-pops.mp3"],
        volume: 0.5,
      });
      celebrationSound.play();

      document.body.classList.add("celebration-mode");

      return () => {
        celebrationSound.stop();
        document.body.classList.remove("celebration-mode");
      };
    }
  }, [isVisible]);

  return isVisible ? <Confetti width={width} height={height} /> : null;
};

export default ConfettiComponent;
