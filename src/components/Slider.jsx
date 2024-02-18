import { motion } from "framer-motion";

const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const hue = (h) => ` hsl(${h}, 100 %, 50 %)`;

function Card({ emoji, hueA, hueB }) {
    const background = `linear - gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
        <motion.div
            className="overflow-hidden flex items-center justify-center relative pt-20 mb-[-120px] m-8 " // Add mr-8 for right margin
            style={{ width: "calc(50% - 4rem)" }} // Adjust width to occupy half of the container width with margins
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div
                className="absolute bottom-0 left-0 right-0 top-0 ml-[150px] mt-12"
                style={{
                    clipPath:
                        "path('M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z')",
                }}
            >
                <div className="w-full h-full  bg-customTextColor " style={{ background }} />
            </div>
            <motion.div
                className="font-bold text-6xl w-72 h-96 flex items-center justify-center bg-textcolor-0 rounded-xl shadow-xl"
                variants={cardVariants}
            >
                {emoji}
            </motion.div>
        </motion.div>
    );
}

const food = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
];

export default function Slider() {
    return (
        <div className="flex flex-wrap">
            {food.map(([emoji, hueA, hueB]) => (
                <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
            ))}
        </div>
    );
}