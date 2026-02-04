export const Button = ({ children }: { children: React.ReactNode }) => {
    return (
        <button
            style={{
                padding: "10px 20px",
                background: "#001e50", // VW Blueish
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
            }}
        >
            {children}
        </button>
    );
};
