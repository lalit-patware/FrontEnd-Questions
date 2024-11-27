function Example ({num}) {
    const expCal = useMemo(()=>{
        return someHeavyCal(num)
    },[num])
    return <div>{expensiveCalculation}</div>;
}

const MemoParentComp = React.memo((props)=>{
    return <div>{props.value}</div>;
}) 