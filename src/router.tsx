import * as React from 'react'
import { RouteObject } from 'react-router-dom'
import { Path } from '@/enum/path'
import Iterator from '@/pages/Behavioral/Iterator'
import Mediator from '@/pages/Behavioral/Mediator'
import Memento from '@/pages/Behavioral/Memento/Memento.tsx'
import MementoClassic from '@/pages/Behavioral/MementoClassic/MementoClassic.tsx'

const Main = React.lazy(() => import('@/pages/Creational/FactoryMethod'))
const AbstractFactory = React.lazy(
  () => import('@/pages/Creational/AbstractFactory')
)
const Prototype = React.lazy(
  () => import('@/pages/Creational/Prototype/Prototype')
)
const PrototypeRegistry = React.lazy(
  () => import('@/pages/Creational/Prototype/PrototypeRegistry')
)
const Singleton = React.lazy(() => import('@/pages/Creational/Singleton'))
const Builder = React.lazy(() => import('@/pages/Creational/Builder'))

const AdapterFC = React.lazy(
  () => import('@/pages/Structure/Adapter/AdapterFC')
)
const AdapterClassic = React.lazy(
  () => import('@/pages/Structure/Adapter/AdapterClassic')
)
const BridgeFC = React.lazy(() => import('@/pages/Structure/Bridge/BridgeFC'))
const BridgeClassic = React.lazy(
  () => import('@/pages/Structure/Bridge/BridgeClassic')
)
const CompositeFC = React.lazy(
  () => import('@/pages/Structure/Composite/CompositeFC')
)
const CompositeClassic = React.lazy(
  () => import('@/pages/Structure/Composite/CompositeClassic')
)
const Decorator = React.lazy(() => import('@/pages/Structure/Decorator'))
const Facade = React.lazy(() => import('@/pages/Structure/Facade'))
const Flyweight = React.lazy(() => import('@/pages/Structure/Flyweight'))
const Proxy = React.lazy(() => import('@/pages/Structure/Proxy'))

const ChainsOfResponsibility = React.lazy(
  () => import('@/pages/Behavioral/ChainsOfResponsibility')
)
const Command = React.lazy(() => import('@/pages/Behavioral/Command'))

export const routes = (): RouteObject[] => {
  return [
    {
      children: [
        {
          index: true,
          element: <Main />,
          path: Path.FactoryMethod
        },
        {
          element: <AbstractFactory />,
          path: Path.AbstractFactory
        },
        {
          element: <Prototype />,
          path: Path.Prototype
        },
        {
          element: <PrototypeRegistry />,
          path: Path.PrototypeRegistry
        },
        {
          element: <Singleton />,
          path: Path.Singleton
        },
        {
          element: <Builder />,
          path: Path.Builder
        }
      ]
    },
    {
      children: [
        {
          index: true,
          element: <AdapterFC />,
          path: Path.AdapterFC
        },
        {
          element: <AdapterClassic />,
          path: Path.AdapterClassic
        },
        {
          element: <BridgeFC />,
          path: Path.BridgeFC
        },
        {
          element: <BridgeClassic />,
          path: Path.BridgeClassic
        },
        {
          element: <CompositeFC />,
          path: Path.CompositeFC
        },
        {
          element: <CompositeClassic />,
          path: Path.CompositeClassic
        },
        {
          element: <Decorator />,
          path: Path.Decorator
        },
        {
          element: <Facade />,
          path: Path.Facade
        },
        {
          element: <Flyweight />,
          path: Path.Flyweight
        },
        {
          element: <Proxy />,
          path: Path.Proxy
        }
      ]
    },
    {
      children: [
        {
          index: true,
          element: <ChainsOfResponsibility />,
          path: Path.ChainsOfResponsibility
        },
        {
          element: <Command />,
          path: Path.Command
        },
        {
          element: <Iterator />,
          path: Path.Iterator
        },
        {
          element: <Mediator />,
          path: Path.Mediator
        },
        {
          element: <Memento />,
          path: Path.Memento
        },
        {
          element: <MementoClassic />,
          path: Path.MementoClassic
        }
      ]
    },
    {
      element: <h1>Not found</h1>,
      path: '*'
    }
  ]
}
