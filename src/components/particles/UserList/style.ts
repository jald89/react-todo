import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-content: flex-end;
`
export const ColUsers = styled.div`
    text-align: left;
    flex: 1;
    padding: 5px;

    ul {
        padding-left: 0px;
        list-style: none;

        a {
            color: #222;
            text-decoration: none;

            li {
                padding: 8px 10px;
                border-bottom: 1px #f2f2f2 solid;
                color: #222
            }

            &:hover li {
                border-bottom: 1px #f2f2f2 solid;
                background: #f2f2f2
            }
        }
    }
`