import { FC } from "react";
import style from "./style.module.css";
import Button from "../Button";

const WelcomeMessage: FC = () => {
  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.bgImage}>
          <svg
            width="952"
            height="150"
            viewBox="0 0 952 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.400001 105.6H29C29.2667 111.6 32.1333 116.133 37.6 119.2C43.2 122.267 49.7333 123.8 57.2 123.8C75.0667 123.8 84 117.933 84 106.2C84 103.133 83.2667 100.467 81.8 98.2C80.4667 95.9333 78.9333 94.2667 77.2 93.2C75.4667 92 73 91 69.8 90.2C66.6 89.4 63.9333 88.8667 61.8 88.6C59.8 88.3333 57 88.0667 53.4 87.8C19.4 84.8667 2.4 71.6 2.4 48C2.4 33.4667 7.46667 22.5333 17.6 15.2C27.7333 7.73333 40.4 3.99999 55.6 3.99999C62.5333 3.99999 69 4.79999 75 6.4C81.1333 7.86666 86.8 10.2 92 13.4C97.2 16.6 101.333 21.0667 104.4 26.8C107.467 32.4 109 38.9333 109 46.4H81C80.2 41.0667 77.4 37.0667 72.6 34.4C67.8 31.6 62.1333 30.2 55.6 30.2C49.2 30.2 43.6 31.8 38.8 35C34.1333 38.0667 31.8 42.2 31.8 47.4C31.8 53 34.0667 57 38.6 59.4C43.2667 61.6667 49.9333 63.2667 58.6 64.2C67 65 74.0667 66.0667 79.8 67.4C85.6667 68.7333 91.3333 70.8667 96.8 73.8C102.4 76.7333 106.6 80.9333 109.4 86.4C112.2 91.7333 113.6 98.3333 113.6 106.2C113.6 114.067 112 120.933 108.8 126.8C105.6 132.667 101.2 137.2 95.6 140.4C90.1333 143.6 84.2 145.933 77.8 147.4C71.5333 149 64.7333 149.867 57.4 150C41.9333 150 28.5333 146.2 17.2 138.6C6 130.867 0.400001 119.867 0.400001 105.6ZM231.32 147H203.12V91.2C203.387 84.9333 201.72 79.9333 198.12 76.2C194.654 72.4667 190.254 70.6 184.92 70.6C179.32 70.6 174.52 72.5333 170.52 76.4C166.52 80.1333 164.52 85.2667 164.52 91.8V147H136.52V80.4C136.52 77.4667 136.454 75.4 136.32 74.2C136.32 73 135.987 71.8 135.32 70.6C134.787 69.4 133.854 68.6667 132.52 68.4C131.32 68 129.587 67.8 127.32 67.8V50.4C150.787 46.4 162.52 50.7333 162.52 63.4C165.054 58.2 169.187 54.4 174.92 52C180.787 49.6 186.92 48.4 193.32 48.4C206.254 48.4 215.787 52.3333 221.92 60.2C228.187 68.0667 231.32 78.4 231.32 91.2V147ZM300.972 48.2C318.172 48.2 330.505 53.4 337.972 63.8C345.572 74.2 347.505 87.8 343.772 104.6H278.372C279.305 117.933 287.839 125.2 303.972 126.4C309.572 126.667 313.839 126.6 316.772 126.2C325.839 125.133 333.505 123.2 339.772 120.4L342.972 140.8C330.839 146.533 318.372 149.4 305.572 149.4C289.172 149.667 275.839 145.133 265.572 135.8C255.439 126.467 250.372 113.733 250.372 97.6C250.639 81.7333 255.639 69.5333 265.372 61C275.239 52.4667 287.105 48.2 300.972 48.2ZM300.972 69.6C295.372 69.6 290.505 71.1333 286.372 74.2C282.239 77.1333 279.639 81.2667 278.572 86.6H320.972C321.239 80.7333 319.439 76.4667 315.572 73.8C311.705 71 306.839 69.6 300.972 69.6ZM427.933 132.2C425.266 137.8 420.733 142 414.333 144.8C408.066 147.467 401.466 148.8 394.533 148.8C385.199 148.8 377.066 146.067 370.133 140.6C363.333 135 359.799 127.667 359.533 118.6C358.999 107.267 362.266 98.6667 369.333 92.8C376.399 86.8 385.599 83.8 396.933 83.8C407.466 83.8 415.999 85.8667 422.533 90V83.4C422.533 74.2 414.533 69.6 398.533 69.6C386.933 69.6 377.666 71.5333 370.733 75.4L367.133 55.4C377.266 50.6 389.333 48.2 403.333 48.2C433.999 48.2 449.333 60.2 449.333 84.2V119C449.333 121.667 449.333 123.533 449.333 124.6C449.466 125.667 449.799 126.933 450.333 128.4C450.866 129.733 451.733 130.6 452.933 131C454.266 131.4 456.066 131.533 458.333 131.4L458.533 147C453.466 147.933 448.666 148.4 444.133 148.4C439.599 148.4 435.733 147.067 432.533 144.4C429.466 141.6 427.933 137.533 427.933 132.2ZM421.933 112.4V107.4C416.466 103.667 409.799 101.8 401.933 101.8C397.266 102.067 393.466 103.533 390.533 106.2C387.599 108.733 386.399 112.267 386.933 116.8C387.199 120.133 388.599 122.733 391.133 124.6C393.666 126.333 396.666 127.2 400.133 127.2C405.333 127.2 410.133 125.933 414.533 123.4C419.066 120.733 421.533 117.067 421.933 112.4ZM504.675 86H511.475C521.742 86 528.942 82.8667 533.075 76.6C537.208 70.2 539.275 61.4667 539.275 50.4H565.675C565.942 61.6 564.408 71.2 561.075 79.2C557.742 87.0667 551.608 93.3333 542.675 98L570.275 144V146.8H542.075L519.075 106.8C516.675 107.6 514.008 108 511.075 108H504.675V146.8H476.875V0.799999H504.675V86ZM657.431 73.2L713.631 6.6H724.431V147H694.431V71.2L659.231 115.2H655.431L620.231 71.2V147H590.231V6.6H601.231L657.431 73.2ZM813.87 132.2C811.204 137.8 806.67 142 800.27 144.8C794.004 147.467 787.404 148.8 780.47 148.8C771.137 148.8 763.004 146.067 756.07 140.6C749.27 135 745.737 127.667 745.47 118.6C744.937 107.267 748.204 98.6667 755.27 92.8C762.337 86.8 771.537 83.8 782.87 83.8C793.404 83.8 801.937 85.8667 808.47 90V83.4C808.47 74.2 800.47 69.6 784.47 69.6C772.87 69.6 763.604 71.5333 756.67 75.4L753.07 55.4C763.204 50.6 775.27 48.2 789.27 48.2C819.937 48.2 835.27 60.2 835.27 84.2V119C835.27 121.667 835.27 123.533 835.27 124.6C835.404 125.667 835.737 126.933 836.27 128.4C836.804 129.733 837.67 130.6 838.87 131C840.204 131.4 842.004 131.533 844.27 131.4L844.47 147C839.404 147.933 834.604 148.4 830.07 148.4C825.537 148.4 821.67 147.067 818.47 144.4C815.404 141.6 813.87 137.533 813.87 132.2ZM807.87 112.4V107.4C802.404 103.667 795.737 101.8 787.87 101.8C783.204 102.067 779.404 103.533 776.47 106.2C773.537 108.733 772.337 112.267 772.87 116.8C773.137 120.133 774.537 122.733 777.07 124.6C779.604 126.333 782.604 127.2 786.07 127.2C791.27 127.2 796.07 125.933 800.47 123.4C805.004 120.733 807.47 117.067 807.87 112.4ZM903.013 113H902.413L891.013 132.2L880.613 147H852.613V143.8L886.013 95.8L857.413 53.6V50.6H884.213L892.813 63.2L902.013 79.4H902.612L911.613 63L920.013 50.6H948.613V53.8L919.013 96.8L951.613 143.8V147H924.613L913.813 131.4L903.013 113Z"
              fill="white"
              fillOpacity="0.12"
            />
          </svg>
        </div>
        <div className={style.mainBlock}>
          <h1>Кроссовки известных брендов с доставкой по России и СНГ</h1>
          <p>
            Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
            многие другие по низким ценам
          </p>
          <Button
            text="Перейти к покупкам"
            backgroundColor="var(--button-red-color)"
            textColor="var(--light-text-color)"
            width="50%"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;