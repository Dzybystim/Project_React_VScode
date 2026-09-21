import {
    StatisticsContainer,
    StatisticsListContainer,
    StatisticsTitle,
    StatisticsItem,
    StatisticsText
} from './Statistics.styled'

function Statistics({title, stats}) {
    console.log(stats)
    return (
    <StatisticsContainer>
    {title && <StatisticsTitle>{title}</StatisticsTitle>}

  <StatisticsListContainer>
    {stats.map(stat => (
      <StatisticsItem key={stat.id}>
        <StatisticsText className="label">{stat.label}</StatisticsText>
        <StatisticsText className="percentage">{stat.percentage}%</StatisticsText>
      </StatisticsItem>
    ))}
  </StatisticsListContainer>
</StatisticsContainer>
)}

export default Statistics;