import { useDispatch, useSelector } from 'react-redux'
import { ReduxState } from '../store/store'
import { setCurrentAdmin } from '../store/actions/set-current-admin'
import { CurrentAdmin } from '../../current-admin.interface'

/**
 * @memberof useCurrentAdmin
 * @alias UseCurrentAdminResponse
 */
export type UseCurrentAdminResponse = [
  CurrentAdmin | null,
  (currentAdmin: CurrentAdmin | null) => CurrentAdmin | {}
]

/**
 * Hook which allows you to get and set currentAdmin
 *
 * ```usage
 * import { useCurrentAdmin } from 'admin-bro'
 *
 * const myComponent = () => {
 *   const [currentAdmin, setCurrentAdmin] = useCurrentAdmin()
 *   // ...
 * }
 * ```
 *
 * @class
 * @subcategory Hooks
 * @bundle
 * @hideconstructor
 */
export const useCurrentAdmin = (): UseCurrentAdminResponse => {
  const currentAdmin = useSelector((state: ReduxState) => state.session)
  const dispatch = useDispatch()
  return [
    currentAdmin,
    (admin: CurrentAdmin | null): any => dispatch(setCurrentAdmin(admin)),
  ]
}

export default useCurrentAdmin
