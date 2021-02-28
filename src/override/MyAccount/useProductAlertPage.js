import {gql, useQuery} from "@apollo/client";
import {useEffect} from "react";

// TODO: split this into 2?
const getCustomerSubscriptionQuery = gql`
query{
  customer{
    mp_product_alert{
      out_of_stock(pageSize: 100){
        items{
          product_id
          status
          subscribe_updated_at
          subscriber_id
          website_id
        }
        pageInfo{
          currentPage
          hasNextPage
          hasPreviousPage
        }
        total_count
      }
      product_price(pageSize: 100){
        items{
          product_id
          status
          subscribe_updated_at
          subscriber_id
          website_id
        }
        pageInfo{
          currentPage
          hasNextPage
          hasPreviousPage
        }
        total_count
      }
    }
  }
}`

export const useProductAlertPage = (props) => {
    const setLoading = props ? props.setLoading : null

    const {data, refetch: reInitialize, loading} = useQuery(getCustomerSubscriptionQuery, {
        fetchPolicy: "network-only",
        onCompleted: () => {
            setLoading(false)
        },
        onError: () => setLoading(false)
    })

    useEffect(() => {
        if (loading) {
            setLoading(true)
        }
    }, [loading])


    return {
        customerData: data,
        reInitialize: reInitialize
    }
}
