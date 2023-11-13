"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui";
import { Line, LineChart, ResponsiveContainer } from "recharts"

const data = [
  {
    revenue: 10400,
    subscription: 240,
  },
  {
    revenue: 14405,
    subscription: 300,
  },
  {
    revenue: 9400,
    subscription: 200,
  },
  {
    revenue: 8200,
    subscription: 278,
  },
  {
    revenue: 7000,
    subscription: 189,
  },
  {
    revenue: 9600,
    subscription: 239,
  },
  {
    revenue: 11244,
    subscription: 278,
  },
  {
    revenue: 26475,
    subscription: 189,
  },
]

export const InfoCard = () => {
  return (
    <Card className='w-96'>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">

        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">1K+</div>
        <p className="text-xs text-muted-foreground">
          Happy customers
        </p>
        <div className="h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
            >
              <Line
                // isAnimationActive={false}
                type="monotone"
                strokeWidth={2}
                dataKey="revenue"
                dot={{ r: 0 }}
                stroke="hsl(0 72.2% 50.6%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
