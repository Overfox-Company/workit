import { NextPage } from 'next'


interface Props {
    type: "correct" | "warn" | "error";
    text: string;
}
const colors = {
    correct: {
        bg: "#DDF0E7",
        font: "#097A41"
    },
    warn: {
        bg: "#FFE8D5",
        font: "#945C2E"
    },
    error: {
        bg: "#F0DDDE",
        font: "#C21823"
    }
}
const ActivityIndicator: NextPage<Props> = ({ type, text }) => {
    const selectedColors = colors[type];
    return <div style={{ backgroundColor: selectedColors.bg, padding: "4px 12px", borderRadius: "14px", fontWeight: 700 }}>
        <p style={{
            color: selectedColors.font, margin: 0, fontSize: 12
        }}>
            {text}
        </p>
    </div>
}

export default ActivityIndicator