// import { PropsWithChildren } from 'react'

// type Props = {
//     children?: React.ReactNode | undefined
// }

export const DarkLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <>
            <div style={{
                backgroundColor: 'rgba(0,100,7,0,3)',
                borderRadius: '5px',
                padding: '10px',
            }}>
                <h3>DarkLayout</h3>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}
