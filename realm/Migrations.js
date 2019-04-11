import { DemoSchema } from './Schemas'

/**
 * 数据库版本管理
 */
export default [{
  schema: [DemoSchema],
  path: 'demo.realm',
  schemaVersion: 1,
  migration: (oldRealm, newRealm) => {
  }
}]
